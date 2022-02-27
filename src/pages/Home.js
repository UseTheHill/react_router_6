
// import BlogList from './BlogList';
// import useFetch from './useFetch';

// const Home = () => {
//     const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

//     return ( 
//         <div className="home">
//             {error && <div>{error}</div>}
//             {isPending && <div>Loading...</div>}
//             <BlogList blogs={blogs} title="All Blogs"/>
//         </div>
//      );
// }

// export default Home;


import styles from "./Home.module.scss";
import { Container, Row, Col } from "react-bootstrap";

export default function Home() {
  return (
    <Container className={styles.home_container}>
      <Row className={styles.home_row1}>
        <Col>1 of 1</Col>
      </Row>
    </Container>
  );
}
