import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadString } from 'firebase/storage';
import firebaseConfig from './firebase-applet-config.json';
import { getAuth, signInAnonymously } from 'firebase/auth';

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const auth = getAuth(app);

async function run() {
    try {
        await signInAnonymously(auth);
        console.log("signed in");
    } catch(e) {
        console.log("auth error", e);
    }
    const storageRef = ref(storage, 'test.txt');
    try {
        await uploadString(storageRef, 'hello world');
        console.log("Upload success!");
    } catch (e: any) {
        console.error("Upload failed", e.message);
    }
}
run();
