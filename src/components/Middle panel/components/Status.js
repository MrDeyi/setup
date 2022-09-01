import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Status.css'

function Status() {

    const Contacts=[
        {
            id:"01",
            name:"Buhle Jayne",
            photo:"https://www.unigreet.com/wp-content/uploads/2020/04/Smiley-816x1024.jpg"
        },
        {
            id:"02",
            name:"Mosis M",
            photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzPfZtBIi9mrbG2-nAnaa7bVHaRzqmej0uiQ&usqp=CAU"
        },
        {
            id:"03",
            name:"Karabo M",
            photo:"https://1.bp.blogspot.com/-_hys8BD9j38/YTuyaWdan9I/AAAAAAAAuVQ/BLKwKXpLnpQWI40kntZz7HyA6FzQRZJ0ACLcBGAsYHQ/s1600/Best-Profile-Pic-For-Boys%2B%25288%2529.jpg"
        },
        {
            id:"04",
            name:"Amahle D",
            photo:"data:image/jpeg;base64,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"
        },
        {
            id:"05",
            name:"Unathi H",
            photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUAQOSkZYfkEA301YD7ScojRUNG1lAeFC1tA&usqp=CAU"
        }
    
    ]
    ;
  return (

      <Navbar bg="bg-info text-white" variant="light">
        <Container>
          <Nav className="me-auto">
           
           
        
        {Contacts.map(post=>(
             <Nav.Link href="#home">
          <div className="Single_status">
          <img className="imgstatus" src={post.photo}/>
           <span className="spanstatus">{post.name}</span>
          </div>
          </Nav.Link>
        ))
        }

           

          </Nav>
        </Container>
      </Navbar>
   
  );
}

export default Status;