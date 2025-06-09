import React from 'react';
import "./Caketabs.css";  

const CakeTabs = ({ selectedCategory, setSelectedCategory,startchang }) => {
  const tabs = [
    { label: 'CLOUD CAKE', value: 'cloud cake' },
    { label: 'BUTTERCREAM CAKE', value: 'BUTTERCREAM CAKE' },
    { label: 'MOUSSE CAKE', value: 'MOUSSE CAKE' },
    { label: 'kIDS CAKE', value: 'kids cake' },
    { label: 'PIECE CAKE', value: 'Piece cake' },
    { label: '★PINKFONG X TOUS LES JOURS ★', value: 'Pinkfong' },
  ];

  return (
    <div className='d-flex justify-content-between col-10 m-auto mt-5 '>
      {tabs.map((tab) => (
        <p
          key={tab.value}
          className={`btn-link fs-5 ptext3 px-1 cake-tab ${
            selectedCategory === tab.value ? "active-tab" : ""
          }`}
          onClick={() => setSelectedCategory(tab.value)}
        >
          {tab.label}
        </p>
      ))}
      <div>
        <button onClick={ () =>{
        startchang();

        }}>
          chang active
        </button>
      </div>
    </div>
  );
};

export default CakeTabs;
