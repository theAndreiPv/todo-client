import firebase from 'firebase';

export default {
  async registration({ name, email, password }) {
    const result = await firebase.auth().createUserWithEmailAndPassword(email, password);
    await firebase.database().ref(`/users/${result.user.uid}`).set({ name });
  },
};
