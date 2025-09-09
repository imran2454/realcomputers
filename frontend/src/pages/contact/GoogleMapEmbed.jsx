import React from 'react'

const GoogleMapEmbed = () => {
  return (
    <div>
      <h1 className='text-center p-10 text-4xl font-semibold'>Find our Institute</h1><hr className='border-purple-500 border-1' />
       {/* Google Map */}
        <div className="w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg mt-5">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d225.74180451191415!2d82.56391385497872!3d25.140123686494857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398fc1d356b20d15%3A0x62900d002b402c1f!2sThe%20Real%20Computer%20Education%20%26%20The%20Real%20Digital%20library!5e0!3m2!1sen!2sin!4v1750014840546!5m2!1sen!2sin"
            
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
    </div>
  )
}

export default GoogleMapEmbed

{/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d225.74180451191415!2d82.56391385497872!3d25.140123686494857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398fc1d356b20d15%3A0x62900d002b402c1f!2sThe%20Real%20Computer%20Education%20%26%20The%20Real%20Digital%20library!5e0!3m2!1sen!2sin!4v1750014840546!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}