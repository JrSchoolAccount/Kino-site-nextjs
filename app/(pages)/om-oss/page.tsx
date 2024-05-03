export default function Page() {
          return (
                    <main className="w-full pt-12 sm:pt-20 lg:pt-40">
                              <h1 className="text-2xl lg:text-3xl text-custom-gray-green mb-8 custom-textShadow-h1">Om oss</h1>
                              <h2 className="common-h2-omOss-text-style">Bio Grådask - "Det är vi som sätter Regn i Regna"</h2>
                              <p className="text-left common-p-omOss-text-style">
                                        Vi startade den här biografen för att erbjuda invånare i Regna en
                                        sysselsättning under de dagar, veckor och månader med ihållande regn som
                                        ofta iaktas här. För att inte förstöra Regnas image som en deprimerande
                                        by gör vi i vårt filmutbud ett särskilt urval av gamla klassiker och nya
                                        releaser, samtliga med ett deprimerande tema! Vi gör inget anspråk på
                                        att förändra Regnas status quo, utan förser allmänheten med ett
                                        alternativt sätt att uppnå förödande depression. Kom till Bio Grådask
                                        och sörj livets slit och slask med oss!
                              </p>
                              <h2 className="common-h2-omOss-text-style">Hitta hit</h2>
                              <div className="custom-margin-map" style={{ width: '100%' }}>
                                        <iframe
                                                  className="w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px]"
                                                  frameBorder="0"
                                                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Regnag%C3%A5rden%2047,%20640%2010%20H%C3%B6gsj%C3%B6+(Bio%20Gr%C3%A5dask)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                                  allowFullScreen
                                        > </iframe>
                              </div>

                              <h2 className="common-h2-omOss-text-style">Öppettider</h2>
                              <p className="common-p-omOss-text-style">
                                        Vi har öppet enbart ifall av regn (eller vice versa?), vilket är för det
                                        mesta här i Regna. Med regn avses här en nederbörd på minst 0.2 mm/h,
                                        snö ej inkluderat.
                              </p>

                              <h2 className="common-h2-omOss-text-style">Kontakta oss</h2>
                              <p className="common-p-omOss-text-style">
                                        Vi tar emot fax på 35992-494Ar5. Nisse på kontoret håller på att
                                        installera datormaskin och vi hoppas inom kort kunna ta emot även
                                        internetpost, så kallat E-mejl. Håll koll på hemsidan för senaste infon
                                        om hur det går! I övrigt rekommenderas att dyka upp vid receptionen,
                                        Birgitta brukar vara där ibland och kan även teckenspråk! Oftast är dock
                                        biografen obemannad, då våra anställda alltjämt sjukskriver sig för
                                        nedstämdhet. Känn er fria att bara kliva in i biosalongen under
                                        öppettider och prata med någon i publiken därinne, ingen bryr sig ändå
                                        egentligen om filmen som pågår.
                              </p>
                    </main>

          )
}

