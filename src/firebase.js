import * as firebase from "firebase";
import "firebase/database";
import config from './config'

firebase.initializeApp(config);

export default firebase.database();
