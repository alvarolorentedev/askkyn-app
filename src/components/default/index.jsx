import * as React from "react"
import { useEffect } from "react"
import "./index.scss"
import PouchDB from 'pouchdb';

const DefaultPage = ({ finishedLoading }) => {
  useEffect(finishedLoading ,[finishedLoading]);
  useEffect(() => {
    var db = new PouchDB('askkyn');
    db.info().then(function (info) {
      console.log(info);
    })    
  },[])

  return (<>
    Welcome to Askkyn
  </>)
}

export const Default = (props) => <DefaultPage {...props} />;
