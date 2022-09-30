export const Projects = () =>{

    const projects = [
        
            {
              title: "Expense Tracker App",
              description: "Design & Development",
              imgUrl: projImg1,
            },
            {
              title: "Project Management App",
              description: "Design & Development",
              imgUrl: projImg2,
            },
            {
              title: "",
              description: "Design & Development",
              imgUrl: projImg3,
            },
           
          ];
    
    return (
      <section className = "project" id = "project">
        <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            
            <Tab.Container id="project-tabs" defaultActiveKey= "first">
            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Row>
                        projects.map((projects, index) =>{
                          
                        })
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                  </Tab.Container>
          </Col>
        </Row>
        </Container>
      </section>
    )
}