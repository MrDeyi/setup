import React from 'react'
import './Your_group.css'
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { db } from '../../../conf/fireconf'
import {useState, useEffect} from 'react';
import { async } from '@firebase/util';
import {
    doc, 
    addDoc,
    setDoc, 
    collection, 
    getDocs,
    query,
    deleteDoc
} from "firebase/firestore"; 



function Your_groups() {

    const [ users, setUsers] = useState([])

    useEffect(() => {      
        const getPeople = async () => {
            const REF_COLLECTION = collection(db, "Groups"); // reference the collection
            await getDocs(REF_COLLECTION)
                .then((response) => {
                    setUsers(response.docs.map( (user) => {
                            return {...user.data(), id: user.id}
                        }))
                })
                .catch((err) => console.log(err.message))
        }
        getPeople()
    }, []);

  return (
    <div className="your_groups">
       <div className="header" data-testid="separator">Your Groups</div><br/>
        {users.map(post=>(
          <div className="Single_friend">
          <img className="imgp" src={post.photo} alt=""/>
           <span className="span">{post.name}</span>
          </div>
        ))
        }
    </div>
  )
}

export default Your_groups