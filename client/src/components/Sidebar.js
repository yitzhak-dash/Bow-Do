import React from 'react';
import {Link} from 'react-router';

const Sidebar = () => {
    return (<div className="sidebar">
        <ul>
            <li>
                <Link className="btn" to='shoppingItems'>shopping items</Link>
            </li>
            <li>
                <Link className="btn" to='map'>map</Link>
            </li>
            <li>
                <Link className="btn" to='pin'>pin new place</Link>
            </li>
        </ul>
    </div>)
};

export default Sidebar;