import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, Button, Carousel, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
      <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><img className='logobib' alt='logo' src='https://media.istockphoto.com/id/941224020/fr/vectoriel/ic%C3%B4ne-de-livre-ouvert-de-ligne-mince-illustration-de-dessin-vectoriel.jpg?s=612x612&w=0&k=20&c=HhvL5jxcNg2s5fi9-uVtBSJd6IWBBlZul9rv5_BSe60='></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Promotion</Nav.Link>
            <NavDropdown title="Education" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Primaire </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                secondaire
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
              terminal
              </NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      </Container>
          
      <Container className='carousa'>
      <Carousel>
      <Carousel.Item>
        <img id='taswira1'
          className="d-block w-100"
          src="https://www.cdiscount.com/pdt2/2/4/4/1/1200x1200/map3701089215244/rw/kit-fournitures-scolaires-20-pieces-special-colleg.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='ktiba'>Kit Fournitures Scolaires</h3>
          <p className='ktiba'>Kit Fournitures Scolaires 20 pièces spécial collège - Bleu + 1 Règle Marque-Page en Bois.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img id='taswira2'
          className="d-block w-100"
          src="https://www.technopro-online.com/48093-thickbox_default/pack-de-rentree-scolaire-bic.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='ktiba'>Pack De Rentrée Scolaire BIC</h3>
          <p className='ktiba'>Pack De Rentrée Scolaire BIC Ensemble de Peintures Aquarelles BIC Pour enfants </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img id='taswira3'
          className="d-block w-100"
          src="https://www.cdiscount.com/pdt2/e/0/1/1/550x550/bundpackcpce01/rw/pack-fournitures-scolaires-pour-cp-et-ce-12-pieces.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='ktiba'>Pack Fournitures</h3>
          <p className='ktiba'> Pack Fournitures Scolaires pour CP et CE 12 pièces.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

      

      </Container>
     <Container className='charika'>
     <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Société Maped #1 <img className='logomaped' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAABSCAMAAABZhrs9AAABFFBMVEXjBhT////jAA/iAAD+/PzjJSnz8/PoqKnDw8PeAABxgICsAADpAADsp6iXSkfe3t7aCBKcnJzTTk5vb2/s7OzUCRF2fn7PAADv5+aiAACMAACxAADk5OTY2NhNTU3EAADKCw9lZWW6urp7e3uBAACXAACQQT+pqalZWVnOzs5ERESQkJCFhYW9Dg373d67AAB3AADCp6b2wsPgOTveTk+8lZPujI396+zxmJnmSUv1t7jmMzbpXWD20dHghIXmf4Dmb3HDMjLNbW24UE7NmZjl09OSXVufMCyVa2mbOjaGSUfVJymuc3HUXV7djY3Tvr2sgX+DKSe3QkDdtLSyHh2DGRSeWVdkAAClKSR3Kym9XVzCeHa8kYMLAAAHyklEQVRoge2a6WOaSBTAgSFEl3XFiIt4BLyKFxpP1Ehj2nTbNE2abBo37f7//8e+NwMehNjGHF827wNmGOb93jVPwHA8E/EFBXkcpU7GOy8nh0PR4+4SIrygkCnlSvGowL2oEBe4Ys76/WWxHJkgN994ce4ucKXIn6/cV+4r95X7yn3lrnB/+79zoyDEHwg4INyjhTAtcEt1DzeqvXVb7hG7+VG0s5jb6k4ffSuUiu3uzghHhrEeCeVqxw69x3R2AKUY79h9bjf6SGw2DfePUeJORu5hGDeVlbxbagdQxntvwE8eF2qzAtxY9HAy6Q5jIVylfeKT+GE0JX9YjHqPirSZoVzBjcVGwxCuqcM8/+GvPBzdqPERiZ1PGILRMtJQIWRphQCj9WCsz+M4ajAuOeqOumH5NU7xMeJj+TM+u5xlv8BHOnMwgI+Wz41qe0dH5z2v4qNa7/xo1l/WP5zpz2bTnQUZrn8b2x1IyOWI0iMh9axQktPWy+j2udyB43W78gatUFiBGxe07kS3H8Vy33Pp844z9Cp+MR/zN8Q7x08VcDlBCNu/Kf0rFq9mlzGxuzpacaTJZQz0DF1S2q2V/ANkMWpRjvZtUREtNFRpXy+uoFyUu1xadvwsalYucaV8BUdTsctozW7U2w7gDKv5vva39zDp13/KXpmHzHhYSVXVTVylfUrzKqRkDC3/rZznHY3zrCCQBlQjXZ7efEZL9tp/wPHr/OrNpUQNY5j0l6ubT8g/iho/UN9lpnzwT3oTN4sAICn2ARr4NtNBNz0reoJ5C56lb+W2nPmO3Cxy38uyXv4OYLFn3CJWl7N65gBOOAbdh++zti2XQ7iLWmTpBZJiZ2hJVeb8OYzoKgh/G/P9w0gppo6W7MnI3dNSppz5hGZmsfCPzXHv+PYG17dxd5wYigL6NnHNDPoFJAgtKpLkiqTBeWZFV9PhI22ggfKS2xfQYIzPNZrttO1FaX2be+r8vhHOVWi+eI0qPsA/j2V6LbPCMSqgt4XTyioX95NdjkO7yQDx2sjiZVTofkC7NnNTMsbJpYrtAwzthWGyiRss2WNUiGV7h8vZZfQ3Q+2yKwcMLOrUX/IzrlnBCF1QxXalQ21QaCBsmuALWtdTEuJve07n0e4zzdbLf4D8OJavRO+rbBNXMSs0trTPmDq2SinqzdAEuzrqcaAFKnRnL7iCdgtqxWP9im5bzbSzIIbB2s8I+/OGelZoudJCoqGVPOcWVvBZ2kCcmWL83VmpZ+3sXwzHtcYaTGuWMvZiGlSxWaHL3Nneu68hfYP4u4hWreeib6tnBS2zc1q2foPyuP4rqbQBnJu0P+9C30zJ5QG/lHu4rEm+jfp7asCalGcFNbhdoeUG8mnB9SRtY7vJXKX9Ey5uR/1gCXY1LpRrYJPkx4LvPY3RoeClHtc7WKsddHn+fZ0rnWTp9sN51rw/7GH9mXr5M9vO6X/bSoA7Jiy9p4PB4MKfVOTMYHCyy7gQsY8wugDFeuZmPvhRuRqcnJxRbmcwuJzftlPsOqjlm/nl4MtpW2MGy5Xym/mX+alspLh1blLcoWAzq+tZPxZsKBu+FabMJhXTluWsYcswl6LcU7isbS7MhVrGSxeUFC6AFSmFC3LZvSOnpECWs+tDHClsMyvwBx2m/P68sorOB07g9SvjJRfKZ5u7NmXRnx8mS+52YCX7aC7vbgFW7I+dzvXZo7i8yz14vQKlJxvKzy/cxOVbwoMfCYIVtBUXG/7DdWwjAS4vjl8GHOR698gvxhWX4NFWG3krbq2UW/mu6j7Fs/3PuNf0PX8zssLlnWdPMpnm2O8LSX5NnjnWZJZHLp+zqol1sHv4fC4TMolEJOSqkeZ+SVonD58pywLpO4lEXESumLNK1XptHdwaP0ewCTfJlRJ5if1OJ8WLjUK9EXB5wj21y4QMHatkIZb9PijmIolSdT/gsvi0wSZk6sRLjWKO+sd+D+WlvNUs1EvqOtmZkaeKNiFjl08krZrKmpTH5SXqct0Sn4VMqZFkoxj3k+lzeVHNFxvJ/WqRD5CHwmPJhMxcPl4qLZxd5WKWaxjsaiDNvBjbeYTTUawmXm0mE5HcSuVyqwQa7EK9ECTDA46wFZpAgLvQIZoFCLG6msM1LgabkSOBPPNid8o9DI2v8foxh+fjDaDm1XWNXFC/GqfkqhWobch0d7YTfCO4wVEyRSgfKRWaVi0XaA53uJ7PzcJ+vZm/M8e3YjNUSYT7PBcEfDlJ+iP6Gk+1ClDEd6lhXOaz1YBdtZ/IhUw73dH0UCGe+P8r4Al3OB5O2Cs9KVKqlhLFfAg1nIvv23K1YqKZrNYL2MTD4C13MjqaTvvjcQ9k3J9OZ6NYt+W/i1SLzWqyaUWCed3MRWsh3OA0oKuNyJ1cr9roP3cvJW8lq4VmAgMcTt3ApU4DGr3eB3ZxE3tlUQ2Y1WQDoHE1LMA/5/roYgLchjqrY7Lu1QWXRqDt7FeTpYQFnqrBIDyES/Wp8Rq43WhCzKv1OuhtoOJ8Ph+Px+FYixStRhMMQ2QTpiL5nHpvfH+ZS9GSmsvXihajJwtVkH1fqtVCIQlEtCZSi/8C81e5HlxVc3H0DvhWYkUsq1gEYj6uAvJXmA/iMriIvqtqfFVycEKS7hT1U3JX+IH/p3qobMcF8pbrfPkPmugB3OQQM6YAAAAASUVORK5CYII=' alt='logo'></img> </Accordion.Header>
        <Accordion.Body>
        Maped est une société familiale française fondée en 1947 à Annecy, en Haute-Savoie. Aujourd'hui, 
        l'entreprise est présente dans 120 pays, comptabilisant 17 filiales, 
        et intervient sur les marchés de la coupe, 
        du traçage et de l'effaçage.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Groupe BIC #2 <img className='logobic' alt='logo' src='data:image/png;base64,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'></img></Accordion.Header>
        <Accordion.Body>
        BIC est une société française fondée le 25 octobre 1945, dont le siège social se situe à Clichy. 
        L’entreprise est principalement connue pour ses stylos commercialisés sous la marque BIC, 
        BIC Kids ou Conté. Elle produit également des rasoirs, des bateaux, des briquets ainsi 
        que des téléphones portables.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      
      </Container>      
    </div>
  );
}

export default App;
