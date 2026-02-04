import React, { useEffect } from 'react';
import { useChatStore } from '../store/useChatStore';
import UsersLoadingSkeleton from './UsersLoadingSkeleton';



function ContactList() {
  const { getAllContacts, allContacts, setSelectedUser, isUserLoading } = useChatStore();

  useEffect(() => {
    getAllContacts();
  }, [getAllContacts]);

    if(isUserLoading) return <UsersLoadingSkeleton/>;
  return (
    <>  
      {allContacts.map((contact) => (
        <div
          key={contact._id}
          className='bg-cyan-500/10 p-4 rounded-lg cursor-pointer hover:bg-cyan-500/20 transition-colors'
          onClick={() => setSelectedUser(contact)}
        >
          <div className='flex items-center gap-3'>
            {/* ToDo: Fix this Online Status and Make it work with socket */}
            <div className={`avatar online`}>
              <div className='size-12 rounded-full'>
                <img src={contact.profilePic || "/image.png"}/>
              </div>
            </div>
              <h4 className='text-slate-200 font-medium'>{contact.fullName}</h4>
          </div>

        </div>
      ))}
    </>
  )
}

export default ContactList;