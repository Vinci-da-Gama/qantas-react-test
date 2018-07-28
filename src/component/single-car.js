import React from 'react';

export default ({car: { id, brand, color, engineSize, drive }}) =>  (
    <div className="card rounded-0 mt-4">
        <div className="card-body">
            <h4 className="card-title">
                Car - { id+1 }
            </h4>
            <ul className="list-group card-text">
                <li className="list-group-item">
                    <span className="float-left text-left text-secondary w-50">
                        Brand: 
                    </span>
                    <span className="float-right text-right text-dark w-50">
                        { brand }
                    </span>
                </li>
                <li className="list-group-item">
                    <span className="float-left text-left text-secondary w-50">
                        Color: 
                    </span>
                    <span className="float-right text-right text-dark w-50">
                        { color }
                    </span>
                </li>
                <li className="list-group-item">
                    <span className="float-left text-left text-secondary w-50">
                        EngineSize: 
                    </span>
                    <span className="float-right text-right text-dark w-50">
                        { engineSize }
                    </span>
                </li>
                <li className="list-group-item">
                    <span className="float-left text-left text-secondary w-50">
                        drive: 
                    </span>
                    <span className="float-right text-right text-dark w-50">
                        { drive }
                    </span>
                </li>
            </ul>
        </div>
    </div>
);