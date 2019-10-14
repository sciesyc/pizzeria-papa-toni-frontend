import React from 'react';
import { PizzastoreServiceConsumer } from '../pizzastore-service-context'

const withPizzastoreService = () => (Wrapped) => {
    return (props) => {
        return (
            <PizzastoreServiceConsumer>
                {
                    (pizzastoreService) => {
                        return (<Wrapped {...props}
                            pizzastoreService={pizzastoreService} />);
                    }
                }
            </PizzastoreServiceConsumer>
        );
    }
};

export default withPizzastoreService;