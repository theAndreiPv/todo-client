import firebase from 'firebase';

export default {
  // auth
  currentUser() {
    const user = firebase.auth().currentUser;
    return user || null;
  },
  async registration({ name, email, password }) {
    const result = await firebase.auth().createUserWithEmailAndPassword(email, password);
    await firebase.database().ref(`/users/${result.user.uid}/info`).set({ name });
  },
  async login({ email, password }) {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  },
  async logout() {
    await firebase.auth().signOut();
  },
  // info
  async getUserInfo() {
    const { uid, email } = this.currentUser();
    const info = (await firebase.database().ref(`/users/${uid}/info`).once('value')).val();
    info.email = email;
    return info;
  },
};