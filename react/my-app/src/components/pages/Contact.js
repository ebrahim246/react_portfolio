import React from "react";


function Contact(props) {
  return (
    <div>
      
      <p /><form className="d-flex">
      <p><link rel="stylesheet" href="style.css" /></p>
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        <br />
        <br />
        <br />
        <br />
        <div className="container">
          <h1 style={{textAlign: 'center'}}>
            Contact page
          </h1>
          <form action="action_page.php">
            <div className="row">
              <div className="col-25">
                <label htmlFor="fname">First Name</label>
              </div>
              <div className="col-75">
                <input type="text" id="fname" name="firstname" placeholder="Your name.." />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="lname">Last Name</label>
              </div>
              <div className="col-75">
                <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="email">email</label>
              </div>
              <div className="col-75">
                <input type="text" id="email" name="email" placeholder="Your email.." />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="subject">Message</label>
              </div>
              <div className="col-75">
                <textarea id="subject" name="subject" placeholder="Message.." style={{height: '200px'}} defaultValue={""} />
              </div>
            </div>
            <div className="row">
              <input type="submit" defaultValue="Submit" />
            </div>
          </form><p />
        </div></div>
    );
  }

      <p>
        Integer cursus bibendum sem non pretium. Vestibulum in aliquet sem, quis molestie urna.
        Aliquam semper ultrices varius. Aliquam faucibus sit amet magna a ultrices. Aenean
        pellentesque placerat lacus imperdiet efficitur. In felis nisl, luctus non ante euismod,
        tincidunt bibendum mi. In a molestie nisl, eu sodales diam. Nam tincidunt lacus quis magna
        posuere, eget tristique dui dapibus. Maecenas fermentum elementum faucibus. Quisque nec
        metus vestibulum, egestas massa eu, sollicitudin ipsum. Nulla facilisi. Sed ut erat ligula.
        Nam tincidunt nunc in nibh dictum ullamcorper. Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos himenaeos. Etiam ornare rutrum felis at rhoncus.
        Etiam vel condimentum magna, quis tempor nulla.
      </p>
 

export default Contact;
