import { Box, Container, Typography } from '@mui/material';

export default function Page() {
  return (
    <Box
      sx={{
        backgroundColor: '',
        fontFamily: 'Montserrat, sans-serif',
        m: 0,
        textAlign: 'center',
        pt: { xs: 12, sm: 20, lg: 40 },
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontSize: { xs: '1.7em ', sm: '2.3em', lg: '3em' },
          color: '',
          mb: 8,
          textShadow: '0px 0px 7px rgba(0, 0, 0, 0.7)',
        }}
      >
        Om oss
      </Typography>
      <Typography
        variant="h5"
        sx={{
          mt: 6,
          mb: 4,
          mx: { xs: 5, lg: 1.5 },
          fontSize: { xs: '1.3em ', sm: '1.8em', lg: '2.3em' },
          color: '',
          textShadow: '0px 0px 5px rgba(0, 0, 0, 0.8)',
        }}
      >
        Bio Grådask - &ldquo;Det är vi som sätter Regn i Regna&ldquo;
      </Typography>
      <Typography
        sx={{
          textAlign: 'left',
          color: '',
          textShadow: '0px 0px 3px rgba(0, 0, 0, 0.7)',
          mx: { xs: '15%', md: '20%', xl: '34.5%' },
          my: 0.5,
          fontSize: { xs: '0.65em', sm: '0.85em', lg: '1em' },
        }}
      >
        Vi startade den här biografen för att erbjuda invånare i Regna en
        sysselsättning under de dagar, veckor och månader med ihållande regn som
        ofta iaktas här. För att inte förstöra Regnas image som en deprimerande
        by gör vi i vårt filmutbud ett särskilt urval av gamla klassiker och nya
        releaser, samtliga med ett deprimerande tema! Vi gör inget anspråk på
        att förändra Regnas status quo, utan förser allmänheten med ett
        alternativt sätt att uppnå förödande depression. Kom till Bio Grådask
        och sörj livets slit och slask med oss!
      </Typography>

      <Typography
        variant="h5"
        sx={{
          mt: 6,
          mb: 4,
          mx: { xs: 5, lg: 1.5 },
          fontSize: { xs: '1.3em ', sm: '1.8em', lg: '2.3em' },
          color: '',
          textShadow: '0px 0px 5px rgba(0, 0, 0, 0.8)',
        }}
      >
        Hitta hit
      </Typography>
      <Container
        sx={{
          p: 0,
          width: '65%',
          margin: '0.5em 15% 2em 15%',
        }}
      >
        <Box
          sx={{
            width: '100%',
            my: 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            pl: 2,
            '@media (min-width: 768px)': {
              pl: 4,
              margin: '0.5em 10% 2em 0%',
            },
            '@media (min-width: 1024px)': {
              width: '70%',
              pl: 16,
            },
            '@media (min-width: 1280px)': {
              width: '65%',
              pl: 22,
            },
          }}
        >
          <iframe
            style={{
              width: '100%',
              height: '50vw',
              minHeight: '250px',
              maxHeight: '450px',
              border: 'none',
            }}
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Regnag%C3%A5rden%2047,%20640%2010%20H%C3%B6gsj%C3%B6+(Bio%20Gr%C3%A5dask)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            allowFullScreen
          ></iframe>
        </Box>
      </Container>

      <Typography
        variant="h5"
        sx={{
          mt: 6,
          mb: 4,
          mx: { xs: 5, lg: 1.5 },
          fontSize: { xs: '1.3em ', sm: '1.8em', lg: '2.3em' },
          color: '',
          textShadow: '0px 0px 5px rgba(0, 0, 0, 0.8)',
        }}
      >
        Öppettider
      </Typography>

      <Typography
        sx={{
          textAlign: 'left',
          color: '',
          textShadow: '0px 0px 3px rgba(0, 0, 0, 0.7)',
          mx: { xs: '15%', md: '20%', xl: '34.5%' },
          my: 0.5,
          fontSize: { xs: '0.65em', sm: '0.85em', lg: '1em' },
        }}
      >
        Vi har öppet enbart ifall av regn (eller vice versa?), vilket är för det
        mesta här i Regna. Med regn avses här en nederbörd på minst 0.2 mm/h,
        snö ej inkluderat.
      </Typography>

      <Typography
        variant="h5"
        sx={{
          mt: 6,
          mb: 4,
          mx: { xs: 5, lg: 1.5 },
          fontSize: { xs: '1.3em ', sm: '1.8em', lg: '2.3em' },
          color: '',
          textShadow: '0px 0px 5px rgba(0, 0, 0, 0.8)',
        }}
      >
        Kontakta oss{' '}
      </Typography>

      <Typography
        sx={{
          textAlign: 'left',
          color: '',
          textShadow: '0px 0px 3px rgba(0, 0, 0, 0.7)',
          mx: { xs: '15%', md: '20%', xl: '34.5%' },
          my: 0.5,
          fontSize: { xs: '0.65em', sm: '0.85em', lg: '1em' },
        }}
      >
        Vi tar emot fax på 35992-494Ar5. Nisse på kontoret håller på att
        installera datormaskin och vi hoppas inom kort kunna ta emot även
        internetpost, så kallat E-mejl. Håll koll på hemsidan för senaste infon
        om hur det går! I övrigt rekommenderas att dyka upp vid receptionen,
        Birgitta brukar vara där ibland och kan även teckenspråk! Oftast är dock
        biografen obemannad, då våra anställda alltjämt sjukskriver sig för
        nedstämdhet. Känn er fria att bara kliva in i biosalongen under
        öppettider och prata med någon i publiken därinne, ingen bryr sig ändå
        egentligen om filmen som pågår.
      </Typography>
    </Box>
  );
}
