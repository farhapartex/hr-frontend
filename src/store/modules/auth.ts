import { AuthState, RootState, User, AuthCredential } from "../store.types";
import { GetterTree, ActionTree, MutationTree, Module } from "vuex";
import vue from "vue";
import axios from "axios";
import {
    ACCESS_TOKEN,
} from "../getters.names";
import { LOGIN_ENDPOINT, LOGOUT_ENDPOINT, } from '../endpoints.names';
import { SET_AUTH, SET_AUTH_ERROR, CLEAR_AUTH, GET_AUTH_FROM_STORE } from '../mutations.names';
import { LOGIN, LOGOUT } from '../actions.names';
import { generateAuthHeader } from '@/utils/auth';

const DEFAULT_AUTH_STATE: AuthState = {
    token: null,
    user: null,
    error: false,
    accessLevel: null
};

export const state: AuthState = JSON.parse(JSON.stringify(DEFAULT_AUTH_STATE));

const getters: GetterTree<AuthState, RootState> = {
    [ACCESS_TOKEN](state): string | null {
        return state.token;
    },
};

const actions: ActionTree<AuthState, RootState> = {
    async [LOGIN]({ commit, dispatch }, cred: AuthCredential): Promise<any> {
        axios
            .post(LOGIN_ENDPOINT, cred)
            .then(({ data }) => {
                const token = data.key;
                commit(SET_AUTH, token);
                // dispatch(FETCH_PROFILE);
            })
            .catch(e => {
                commit(SET_AUTH_ERROR);
            });
    },
    async [LOGOUT]({ commit }): Promise<any> {
        return new Promise((resolve, reject) => {
            axios
                .post(LOGOUT_ENDPOINT, generateAuthHeader(state.token))
                .then(({ data }) => {
                    commit(CLEAR_AUTH);
                    resolve();
                })
                .catch(e => {
                    reject(e);
                });

        });
    },
};

const mutations: MutationTree<AuthState> = {
    [SET_AUTH](state, payload: string) {
        state.token = payload;
        window.localStorage.setItem("authToken", payload);
        state.error = false;
    },
    [SET_AUTH_ERROR](state) {
        state.error = true;
        state.token = null;
        window.localStorage.removeItem("authToken");
    },
    [CLEAR_AUTH](state: AuthState) {
        window.localStorage.removeItem("authToken");
        window.localStorage.removeItem("profile");
        state.user = null;
        state.token = null;
        state.error = false;
    },
    [GET_AUTH_FROM_STORE](state) {
        const token = window.localStorage.getItem("authToken");
        // console.log(token);
        if (token) {
            state.token = token;
            state.error = false;
        }
    },
};

const authStateModule: Module<AuthState, RootState> = {
    state,
    getters,
    actions,
    mutations
};

export default authStateModule;