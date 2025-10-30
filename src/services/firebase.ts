// Firebase v9 (modular) placeholder service. Replace with your Firebase config in README.
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signOut as fbSignOut } from 'firebase/auth';
import { getFirestore, collection, addDoc, doc, setDoc, getDocs, query, where } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: '<API_KEY>',
  authDomain: '<AUTH_DOMAIN>',
  projectId: '<PROJECT_ID>',
  storageBucket: '<STORAGE_BUCKET>',
  messagingSenderId: '<MESSAGING_SENDER_ID>',
  appId: '<APP_ID>'
};

let app = null as any;
let auth = null as any;
let db = null as any;

export function initFirebase() {
  if (!app) {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
  }
  return { app, auth, db };
}

export async function signIn(email: string, password: string) {
  initFirebase();
  return signInWithEmailAndPassword(auth, email, password);
}

export async function signOut() {
  return fbSignOut(auth);
}

export async function addReport(payload: any) {
  initFirebase();
  const col = collection(db, 'reports');
  const res = await addDoc(col, payload);
  return res.id;
}

export async function fetchReportsByTeacher(teacherId: string) {
  initFirebase();
  const q = query(collection(db, 'reports'), where('teacher_id', '==', teacherId));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

// ... more helpers (checkin, attendance, notifications) can be added similarly
