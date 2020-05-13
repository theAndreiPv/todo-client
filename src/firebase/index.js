import firebase from 'firebase';

export default {
  // auth
  currentUser() {
    const user = firebase.auth().currentUser;
    return user ? user.uid : null;
  },
  async registration({ name, email, password }) {
    const result = await firebase.auth().createUserWithEmailAndPassword(email, password);
    await firebase.database().ref(`/users/${result.user.uid}`).set({ name });
  },
  async login({ email, password }) {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  },
  async logout() {
    await firebase.auth().signOut();
  },
  // info
  async getUserInfo() {
    const uid = this.currentUser();
    return (await firebase.database().ref(`/users/${uid}`).once('value')).val();
  },

};
