import UserActionTypes from "./user.types";
import {takeLatest,put,all,call} from 'redux-saga/effects';
import {auth} from "../../Firebase/firebase.utils";

import {signUpSuccess,
signUpFailure,
signInSuccess,
signInFailure,
} from "./user.actions";

export function* registerUserInDatabase({user,name,surname,email,university}){
    try{

        let formData = new FormData();
        formData.append("uid",  user.uid);
        formData.append("name", name);
        formData.append("surname", surname);
        formData.append("email", email);
        formData.append("university", university);

        let requestOptions = {
            method: 'POST',
            body: formData
        };

        yield fetch("http://1b82eca6dedb.ngrok.io/register", requestOptions)
        yield put(signInSuccess({user,name,surname,email,university}));

    } catch(error) {
        yield put(signInFailure(error));
    }
}

export function* signInAfterSignUp({payload}){
    yield registerUserInDatabase(payload);
}

export function* onSignUpSuccess(){
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS,signInAfterSignUp)
}



export function* signIn({email,password}){
    try{
        const {user} = yield auth.signInWithEmailAndPassword(email, password);//userAuth
        const userId = user.uid;

        let formData = new FormData();
        formData.append("id",  user.uid);

        let requestOptions = {
            method: 'GET',
            mode: 'cors',
            body: formData
        };

        const response = yield fetch("http://1b82eca6dedb.ngrok.io/get_user_data", requestOptions).then(response => response.json());
        yield console.log(response)
        yield put(signInSuccess(response));

    } catch(error) {
        yield put(signInFailure(error));
    }
}



export function* signUp({payload : {name,surname,email,university,password}}){
    try{
        const {user} = yield auth.createUserWithEmailAndPassword(email,password);//userAuth
        const userData = {user : user,name,surname,email,university};


        yield put(signUpSuccess(userData));

    } catch(error) {
        yield put(signUpFailure(error));
    }
}

export function*  onSignInStart() {
    yield takeLatest(UserActionTypes.SIGN_IN_START,signIn)
}

export function*  onSignUpStart() {
    yield takeLatest(UserActionTypes.SIGN_UP_START,signUp)
}


/*

export function* signIn({payload : {email,password}}) {
    try{
        const {user} = yield auth.signInWithEmailAndPassword(email,password);
        yield getSnapshotFromUserAuth(user);
    } catch(error) {
        yield put(signInFailure(error));
    }
}


export function* onEmailSignInStart(){
    yield takeLatest(UserActionTypes.SIGN_UP_START,signIn)
}*/

export function* userSagas (){
    yield all([
        call(onSignUpStart),
        call(onSignUpSuccess),
        call(onSignInStart)]);
}

