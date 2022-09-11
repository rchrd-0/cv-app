import styled from 'styled-components';

import pin from '../../Assets/map-pin.svg';
import phone from '../../Assets/phone.svg';
import email from '../../Assets/mail.svg';

const StyledPreview = styled.div`
  flex: 1;
  min-width: 750px;
  max-width: 1000px;
  aspect-ratio: 1 / 1.4;
  box-shadow: ${(props) => props.theme.boxShadow.medium};
  background-color: #fff;

  > #preview {
    padding: 50px;
    width: 100%;
    height: 100%;
    font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
    font-size: 1rem;

    section {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-bottom: 30px;

      .a-head {
        font-family: 'Roboto Slab', 'Times New Roman', Times, serif;
        font-weight: 600;
        text-transform: uppercase;
        font-size: 1.8rem;

        &.section-head {
          padding-bottom: 5px;
          border-bottom: 2px solid #000;
        }
      }

      .b-head {
        font-weight: 600;
        font-size: 1.4rem;
      }

      .c-head {
        font-size: 1.2rem;
      }

      .name-year {
        display: flex;
        justify-content: space-between;
      }

      &[data-component='basic'] {
        #personal-name {
          width: fit-content;
          font-size: 2.4rem;
        }

        #contact {
          display: flex;
          gap: 30px;

          div {
            background-size: 20px;
            background-position: 0 center;
            background-repeat: no-repeat;
            padding-left: 28px;

            &#personal-loc {
              background-image: url(${pin});
            }

            &#personal-phone {
              background-image: url(${phone});
            }

            &#personal-email {
              background-image: url(${email});
            }
          }
        }
      }
    }
  }
`;

export default StyledPreview;
