import React from 'react';
import {
  FiMoreVertical,
  FiStar,
  FiDollarSign,
  FiMapPin,
  FiBox,
  FiUsers,
  FiCoffee,
  FiClock,
  FiCheckCircle
} from 'react-icons/fi';

import {
  Container,
  Row,
  Badge,
  Col,
  IconContainer,
  TextContainer
} from '../../styles/components/JobCard';

const JobCard = () => {
  return (
    <Container>
      <Row>
        <h3>Nome da vaga</h3>
        <FiMoreVertical size={18} color="#cacaca" />
      </Row>
      <Row>
        <Badge>
          <FiStar size={14} />
          <span>3.9</span>
        </Badge>
        <Badge>
          <FiBox size={14} />
          <span>CELPE</span>
        </Badge>
        <Badge>
          <FiMapPin size={14} />
          <span>Jaboatão dos Guararapes</span>
        </Badge>
        <Badge>
          <FiDollarSign size={14} />
          <span>A combinar</span>
        </Badge>
      </Row>
      <hr />
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        pulvinar urna id lectus luctus porttitor. Sed sit amet magna risus.
        Donec rhoncus orci lectus, tincidunt laoreet eros ultrices ac. Donec
        euismod eget arcu vel pellentesque. Interdum et malesuada fames ac.
      </div>
      <hr />
      <Row>
        <Col>
          <IconContainer>
            <FiCoffee size={18} color="#ffffff" />
          </IconContainer>
          <TextContainer>
            <div>1 vaga</div>
            <div>disponível</div>
          </TextContainer>
        </Col>
        <Col>
          <IconContainer>
            <FiUsers size={18} color="#ffffff" />
          </IconContainer>
          <TextContainer>
            <div>500+ pessoas</div>
            <div>se candidataram</div>
          </TextContainer>
        </Col>
        <Col>
          <IconContainer>
            <FiClock size={18} color="#ffffff" />
          </IconContainer>
          <TextContainer>
            <div>Publicado em</div>
            <div>06/12/2020</div>
          </TextContainer>
        </Col>
        <Col>
          <IconContainer>
            <FiCheckCircle size={18} color="#ffffff" />
          </IconContainer>
          <TextContainer>
            <div>Expira em</div>
            <div>20/12/2020</div>
          </TextContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default JobCard;
