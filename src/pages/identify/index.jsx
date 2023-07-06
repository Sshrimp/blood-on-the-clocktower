import React from 'react'
import { Header } from './style';
import identify from '../../assets/images/idf.jpg'
import { useNavigate } from 'react-router-dom'


const Identify = () => {
  const navigate = useNavigate()
  return (
    <Header>
      <div>
        <img src={identify}  onClick={() => navigate('/kind')} />
      </div>
    </Header>
  )
};

export default Identify;
