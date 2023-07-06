import React, { useEffect, useState, useCallback } from 'react';
import Column from '../../baseUI/column-item';
import { kindTypes } from '../../api/config';
import Horizen2 from '../../baseUI/horizen-item2'
import { NavContainer, Lcontent, Content, Container, Rcontent, Rtitle, Rkind, ListItem, BackBoxContainer } from "./style";
import Scroll from '../../baseUI/scroll';
import SearchInput from '../../baseUI/search-input';
import { CSSTransition } from 'react-transition-group';
import BackBox from '../../baseUI/back-box';
import { useNavigate } from 'react-router-dom';

const Kind = () => {
  const navigate = useNavigate()
  const [showStatus, setShowStatus] = useState(true);
  let [category, setCategory] = useState ('101');
  let [category2, setCategory2] = useState (1);
  let [list, setList] = useState([])
  let handleUpdateCatetory = (val) => {
    setCategory (val);
  }
  let handleUpdetaList = (val) => {
    setCategory2 (val)
  }
  const backToIdentify = useCallback(() => {
    setShowStatus(false);
  }, []); 

  function updateList() {
    let title = kindTypes.filter((item) => 
      item.key == category
    )
    let list = title[0].title.filter((item) => 
      item.key == category2
    ) 
    setList(list[0].kind)
  }
  useEffect(() => {
    updateList()
  }, [category, category2])
  return (
    <CSSTransition
      in={showStatus}
      timeout={300}
      appear={true}
      classNames="fly"
      unmountOnExit
      onExited={() => navigate(-1)}
    >
        <Container>
          <Content>
              <BackBoxContainer><BackBox back={backToIdentify} /></BackBoxContainer>
              <Lcontent>
                <NavContainer>
                    <Column list={kindTypes} handleClick={handleUpdateCatetory} oldVal={category}/>
                </NavContainer>
              </Lcontent>
              <Rcontent>
                  <div className='search'>
                  <SearchInput />
                  </div>
                  <div className='content'>
                  <Rtitle>
                      {
                          kindTypes.map((item) => {
                            return (<div
                                key={item.key}
                                className={`nav ${category !== item.key ? 'rt': ''}`} 
                                onClick={() => setCategory (item.key)}>
                                  {
                                    item.title && 
                                        <Horizen2 title={""} list={item.title} handleClick={handleUpdetaList} oldVal={category2} />
                                  }
                              </div>)
                              }
                            )
                      }
                  </Rtitle>
                  <div className='desc'>
                  <Scroll direction={"vertical"}>
                  <Rkind>
                      {
                        list.map((item) => {
                          return (
                            <ListItem key={item.key}>
                              <img className='icon' src={item.icon} alt="" />
                              <div className='title'>{item.name}</div>
                            </ListItem>
                          )
                        })
                      }
                  </Rkind>
                  </Scroll>
                  </div>
                  </div>
              </Rcontent>
          </Content>
      </Container>
    </CSSTransition>
  )
};


export default React.memo(Kind);
