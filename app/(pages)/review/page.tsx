export default function Page() {
          return (
                    <div>

                              <form action="/api/data" method="post">

                                        <label htmlFor="name">Enter Name </label>
                                        <input type="text" name="name" id="name" placeholder="Ditt namn" required />

                                        <label htmlFor="rating">Betyg:</label>
                                        <input type="number" id="rating" name="rating" min="0" max="5"
                                                  required placeholder="0-5"></input>
                                        <label htmlFor="comment">Kommenter:</label>
                                        <textarea name="comment" id="comment" placeholder="Din kommentar"></textarea>

                                        <input type="submit" value="submit" />

                              </form>
                    </div>
          )
}