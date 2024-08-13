// PlanItem.js
import React from 'react';
import '../styles/PlanItem.css';

function PlanItem({ plan }) {
    const calculateDaysLeft = (date) => {
        const targetDate = new Date(date);
        const currentDate = new Date();
        const timeDifference = targetDate - currentDate;
        const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
        return daysLeft >= 0 ? `D - ${daysLeft}` : `D + ${Math.abs(daysLeft)}`;
    };

    return (
        <div className='plan_item'>
            <div className='plan_details'>
                <div className='plan_icon_wrapper'>
                    <div className='plan_circle'>
                        <div
                            className='plan_percentage_circle'
                            style={{
                                background: `conic-gradient(yellow 0% ${plan.percentage}, transparent ${plan.percentage} 100%)`,
                            }}
                        ></div>
                    </div>
                    <img src={plan.icon || 'https://via.placeholder.com/66'} alt={plan.title} className='plan_icon' />
                </div>
                <div>
                    <h3>{plan.title}</h3>
                    <p>{calculateDaysLeft(plan.date)}</p>
                </div>
            </div>
            <p className='plan_percentage'>{plan.percentage}</p>
        </div>
    );
}

export default PlanItem;
