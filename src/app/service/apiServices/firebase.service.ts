import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private fireBaseDb: AngularFireDatabase) { }

  createUser(data:any){ //--signup
    const dbRef =  this.fireBaseDb.list('/eff_users');
    return dbRef.push(data)
   }
   
   update_Id(data){ //--signup
    this.fireBaseDb.object('/eff_users/'+`${data.userid}`).update(data);
   }


   createLoad(data:any,id){ //--Load
    const dbRef =  this.fireBaseDb.list('/eff_user_loads/'+`${id}`);
    return dbRef.push(data)
   }
   
   update_Load(data){//--Load
    this.fireBaseDb.object('/eff_user_loads/'+`${data.id}`).update(data);
   }


   getUsers(){
    return  this.fireBaseDb.list('/eff_users').valueChanges()
   }

  
}
