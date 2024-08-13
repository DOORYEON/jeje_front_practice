// App.js
import React from 'react';
import Header from './components/Header'; // 새로 만든 Header 컴포넌트
import GraphPage from './pages/GraphPage'; // 그래프 및 플랜 리스트가 포함된 페이지
import './styles/App.css';

function App() {
    return (
        <div className='app-container'>
            <Header />
            <div className='content-container'>
                <GraphPage /> {/* 이 컴포넌트 안에 차트와 리스트가 포함되어 있음 */}
            </div>
        </div>
    );
}

export default App;
