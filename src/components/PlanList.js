import React from 'react';
import PlanItem from './PlanItem';
import '../styles/PlanList.css';

function PlanList({ plans }) {
    return (
        <div className='plan_list'>
            {plans.map((plan) => (
                <PlanItem key={plan.id} plan={plan} />
            ))}
        </div>
    );
}

export default PlanList;
