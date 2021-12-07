import Link, { NextPage } from "next";
import Image from 'next/image';
import iconHome from '../../../../public/assets/home2_05.png';
import numberRight from '../../../../public/assets/home2_03.png';
import Title from '../../global/title';
import Typograph from '../../global/typograph';
import { Container, DivTextHeader } from './styles';

interface Props {
  data?: any
}

const HeaderHome: NextPage<Props> = ({ data }) => {
  const url = data.url.split('.')[0];
  const urlWay = data.url.split('.')[1];

  const linkMore = data.paragraphHeader.split('Endocrinologista,')[1]
  const paragraphText = data.paragraphHeader.split('Saiba Mais')[0]

  return (
    <>
      <Container>
        <Image src={iconHome} width={320} alt='Mascote' />
        <DivTextHeader>
          <Title color='black' fSize={19}>
            <strong className="editUrl">{url}</strong>.{urlWay}
          </Title>
          <Typograph color='black' fSize="15px">
            {paragraphText}
            <a>{linkMore}</a>
          </Typograph>
        </DivTextHeader>
        <div className="numberClinical">
          <Image src={numberRight} width="200px" height="100px" alt='Numero para contato' />
          <div>
            <span className="paragraph">{data.txtNumber}</span>
            <span className="number">{data.numberClinical}</span>
          </div>
        </div>
      </Container>
    </>
  )
}

export default HeaderHome;
