import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { DiscardModal, ProductCard } from '../../components';
import { P_M_NEW_ITEM, PM } from '../../_constants';
import { Add } from '../../_utilities/icons';

// TODO delete after BE implementation
const products = [
    {
        id: 0,
        name: 'iPhone 11 64 GB',
        rating: 4.5,
        description:
            '2 Yıl Apple Türkiye Garantilidir. Kutu içeriğinde iPhone ve USB-C - ' +
            'Lightning Kablosu bulunmaktadır. Adaptör ve Kulaklık bulunmaz.',
        price: '7499.90',
        image: 'https://cutt.ly/Mx6A2pw',
        brand: 'Apple',
        campaign: '24 saatte kargoda',
    },
    {
        id: 1,
        name: 'Gaming Notebook',
        rating: 4.5,
        description: 'Gaming notebook.',
        price: '9,894.95',
        image: 'https://bit.ly/3crSHOh',
        brand: 'Acer',
        campaign: '24 saatte kargoda',
    },
    {
        id: 2,
        name: 'Perwoll Siyahlar için Hassas Sıvı Çamaşır Deterjanı 3L',
        rating: 2,
        description: 'Perwoll Siyahlar için Hassas Sıvı Çamaşır Deterjanı 3L',
        price: '44.99',
        image: 'https://cutt.ly/sx6Ah6A',
        brand: 'Perwoll',
        campaign: "Süpermarket Alışverişine Solo Tuvalet Kağıdı 32'li %20 indirimli",
    },
    {
        id: 3,
        name: 'Prochoice Proderma Yetişkin Kuzu Etli Köpek Maması 18 kg',
        rating: 4,
        description: 'Prochoice Proderma Yetişkin Kuzu Etli Köpek Maması 18 kg',
        price: '227,90',
        image: 'https://cutt.ly/lx6Sh84',
        brand: 'Pro Choice',
        campaign: '75,97 TL x 3 ay’a varan Taksit seçenekleri',
    },
    {
        id: 4,
        name: 'Head&Shoulders Şampuan Klasik Bakım 400 ml x 2',
        rating: 4.5,
        description: 'Head&Shoulders Şampuan Klasik Bakım 400 ml x 2\n',
        price: '49,99',
        image: 'https://cutt.ly/Nx6SDMJ',
        brand: 'Head&Shoulders',
        campaign: '24 saatte kargoda',
    },
];

const Items = () => {
    const history = useHistory();
    const [confirmModal, setConfirmModal] = useState(false);
    const role = PM;

    const handleDelete = () => {
        setConfirmModal(true);
    };

    const onDiscard = () => {
        // TODO delete product
        setConfirmModal(false);
    };

    const handleEdit = () => {
        // TODO Orkun
    };

    const handleCard = () => {
        // TODO open product details
    };

    const handleAdd = () => {
        history.push({
            pathname: P_M_NEW_ITEM,
        });
    };

    const handleUpper = role === PM ? handleDelete : null;
    const handleBottom = role === PM ? handleEdit : null;

    return (
        <>
            <Container fluid="lg" className="pm-item-list">
                <Row className="add-row">
                    <Col
                        className="add-col"
                        xs={{ span: 12, offset: 0 }}
                        md={{ span: 6, offset: 6 }}
                        xl={{ span: 4, offset: 8 }}
                    >
                        <button className="btn" type="button" onClick={handleAdd}>
                            <Add />
                            <div className="ml-1">New Product</div>
                        </button>
                    </Col>
                </Row>
                <Row className="row">
                    <Col xs={12} md={6} xl={4} className="col">
                        <ProductCard
                            role={role}
                            handleUpper={handleUpper}
                            handleBottom={handleBottom}
                            handleCard={handleCard}
                            {...products[0]}
                        />
                    </Col>
                    <Col xs={12} md={6} xl={4} className="col">
                        <ProductCard
                            role={role}
                            handleUpper={handleUpper}
                            handleBottom={handleBottom}
                            handleCard={handleCard}
                            {...products[1]}
                        />
                    </Col>
                    <Col xs={12} md={6} xl={4} className="col">
                        <ProductCard
                            role={role}
                            handleUpper={handleUpper}
                            handleBottom={handleBottom}
                            handleCard={handleCard}
                            {...products[2]}
                        />
                    </Col>
                    <Col xs={12} md={6} xl={4} className="col">
                        <ProductCard
                            role={role}
                            handleUpper={handleUpper}
                            handleBottom={handleBottom}
                            handleCard={handleCard}
                            {...products[3]}
                        />
                    </Col>
                    <Col xs={12} md={6} xl={4} className="col">
                        <ProductCard
                            role={role}
                            handleUpper={handleUpper}
                            handleBottom={handleBottom}
                            handleCard={handleCard}
                            {...products[4]}
                        />
                    </Col>
                    <Col xs={12} md={6} xl={4} className="col">
                        <ProductCard
                            role={role}
                            handleUpper={handleUpper}
                            handleBottom={handleBottom}
                            handleCard={handleCard}
                            {...products[0]}
                        />
                    </Col>
                    <Col xs={12} md={6} xl={4} className="col">
                        <ProductCard
                            role={role}
                            handleUpper={handleUpper}
                            handleBottom={handleBottom}
                            handleCard={handleCard}
                            {...products[0]}
                        />
                    </Col>
                    <Col xs={12} md={6} xl={4} className="col">
                        <ProductCard
                            role={role}
                            handleUpper={handleUpper}
                            handleBottom={handleBottom}
                            handleCard={handleCard}
                            {...products[0]}
                        />
                    </Col>
                </Row>
            </Container>
            <DiscardModal
                show={confirmModal}
                onHide={() => setConfirmModal(false)}
                onDiscard={onDiscard}
                header="Delete the Product?"
                body="If you delete this product now, you will lose it permanently."
                buttonText="Delete"
            />
        </>
    );
};

export default Items;
