// GraphPage.js
import React from 'react';
import PlanList from '../components/PlanList'; // 플랜 리스트 컴포넌트
import '../styles/GraphPage.css';

function GraphPage() {
    const plans = [
        { id: 1, title: '인쪽 다리 들기', date: '2024-09-15', percentage: '63%', icon: '/logo192.png' },
        { id: 2, title: '상체 왼쪽으로 세우기', date: '2024-09-28', percentage: '17%', icon: '/logo512.png' },
        // 더 많은 플랜 추가 가능
    ];

    return (
        <div>
            <div className='chart-container'>
                {/* 여기에는 실제 차트가 들어갈 공간 */}
                <h2>기간별 그래프</h2>
                {/* 차트를 여기에서 렌더링 */}
            </div>
            <div className='plan-list'>
                <PlanList plans={plans} />
            </div>
        </div>
    );
}

export default GraphPage;
