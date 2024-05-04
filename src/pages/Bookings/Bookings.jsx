import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);


  const handleDelete = id =>{
    const proceed = confirm('Are you sure you want to delete');
    if(proceed){
        fetch(`http://localhost:5000/bookings/${id}`,{
            method:'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                alert('delete successful');
                const remaining = bookings.filter(booking => booking._id !== id)
                setBookings(remaining)
            }
        })
    }
}


const handleConfirm = id =>{
    fetch(`http://localhost:5000/bookings/${id}`,{
        method:'PATCH',
        headers:{
            'content-type': 'application/json'
        },
        body:JSON.stringify({status : 'confirm'})
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                // alert('updated successful')
                const remaining = bookings.filter(booking => booking._id !== id);
                const updated = bookings.find(booking => booking._id === id);
                updated.status = 'confirm'
                const newBookings = [updated, ...remaining];
                setBookings(newBookings);
            }
        })
   
}

  return (
    <div>
      <h2>Booking {bookings.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Service</th>
              <th>Job</th>
              <th>Price</th>
              <th>Status</th>
            
              <th></th>
            </tr>
          </thead>
          <tbody>
                {
                    bookings.map(booking => <BookingRow
                    key={booking._id}
                    booking={booking}
                    handleDelete={handleDelete}
                    handleConfirm={handleConfirm}
                    >
                    </BookingRow>)
                }
          </tbody>
         
        </table>
      </div>
    </div>
  );
};

export default Bookings;
