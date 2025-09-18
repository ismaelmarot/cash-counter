import React, { useState } from 'react';
import { getCurrentYear } from '../../helpers/getCurrentYear';
import LegalModal from '../../components/LegalModal/LegalModal';
import TermsModal from '../../components/TermsModal/TermsModal';
import { Button, FooterStyled, Span, DivDesigned } from './Footer.styled';

const Footer: React.FC = () => {
    const [showLegal, setShowLegal] = useState(false);
    const [showTerms, setShowTerms] = useState(false);

    return (
        <>
        <FooterStyled>
            <div className='row align-items-center text-center text-md-start'>
                <DivDesigned className='col-md-8'>
                    <p className='mb-0'>
                    © {getCurrentYear()} Designed and developed by Ismael Marot. All rights reserved.
                    </p>
                </DivDesigned>
                <div className='col-md-4'>
                    <nav className='d-flex justify-content-center justify-content-md-end align-items-center'>
                        <Button 
                            className='btn btn-link px-2 text-decoration-none'
                            onClick={() => setShowLegal(true)} 
                        >
                            Legal
                        </Button>
                        <Span className='d-md-inline'>|</Span>
                        <Button 
                            className='btn btn-link px-2 text-decoration-none'
                            onClick={() => setShowTerms(true)}
                        >
                            Terms of Use
                        </Button>
                    </nav>
                </div>
            </div>
        </FooterStyled>

        <LegalModal show={showLegal} onClose={() => setShowLegal(false)} />
        <TermsModal show={showTerms} onClose={() => setShowTerms(false)} />
        </>
    );
};

export default Footer;