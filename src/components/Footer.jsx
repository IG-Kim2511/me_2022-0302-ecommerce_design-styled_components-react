
import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@mui/icons-material";

import styled from "styled-components";


  

  const Container = styled.div`
    display: flex;
  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  
  const Logo = styled.h1``;
  
  const Desc = styled.p`
    margin: 20px 0px;
  `;
  
  const SocialContainer = styled.div`
    display: flex;
  `;
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;

    // 🧨js126
    background-color: #${(props) => props.p_color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;
  
  const Center = styled.div`
    flex: 1;
    padding: 20px;
    
  `;
  
  const Title = styled.h3`
    margin-bottom: 30px;
  `;
  
  const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  `;
  
  const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
  `;
  
  const Right = styled.div`
    flex: 1;
    padding: 20px;
   
  
  `;
  
  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `;
  
  const Payment = styled.img`
      width: 50%;
  `;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>IG</Logo>
            <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id repellat quisquam distinctio saepe minus perferendis animi at, optio quia deleniti, cum voluptatem minima deserunt voluptatibus ad praesentium magnam a laborum.
            </Desc>
        </Left>

        {/* 🍀js126 . props : color
        
          <Arrow>안의 모든 것들이 props로 넘어감.

          넘어온 props들중 이름이 p_color인 것 호출

        */}

        <SocialContainer>
            <SocialIcon p_color="3B5999">
            <Facebook />
            </SocialIcon>
            <SocialIcon p_color="E4405F">
            <Instagram />
            </SocialIcon>
            <SocialIcon p_color="55ACEE">
            <Twitter />
            </SocialIcon>
            <SocialIcon p_color="E60023">
            <Pinterest />
            </SocialIcon>
        </SocialContainer>
    
        <Center>
            <Title>Useful Links</Title>
            <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
            </List>
        </Center>

        <Right>
            <Title>Contact</Title>

            {/*🍀js133. style 1개때문에 styled-components만들기 찝찝할때... 걍 여기에 css넣음 */}

            <ContactItem>
             <Room style={{marginRight:"10px"}}/> 622 Dixie Path , South Tobinchester 98336
            </ContactItem>

            <ContactItem>
             <Phone style={{marginRight:"10px"}}/> +1 234 56 78
            </ContactItem>

            <ContactItem>
              <MailOutline style={{marginRight:"10px"}} /> contact@lama.dev
            </ContactItem>

            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>  
    
    
    
    
    
    </Container>
  )
}

export default Footer