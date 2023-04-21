import React from 'react'

function Contact() {
  return (
    <div className='contact'>

        <main>
            <h1>Contact Us</h1>
            <form >
                <div>
                    <label >Name</label>
                    <input type="text" required placeholder='write' />
                </div>
                <div>
                    <label >email</label>
                    <input type="email" required placeholder='write@xyz.com' />
                </div>
                <div>
                    <label >Message</label>
                    <input type="text" required placeholder='tells about your doubt...' />
                </div>
                <button type='submit'>send</button>
            </form>
        </main>
    </div>
  )
}

export default Contact