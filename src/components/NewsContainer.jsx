import './news_container.css'
/*      needs database     */

const NewsContainer = () => {
    return (
        <div className="newsContainer">
            <div className="latestNews">
                <h2>Poslednje obavjesti</h2>
                <div className="news">
                    {/* KOMPONENTA -    vadi iz db zadnje vesti 
                    (for petlja negde ide (valjda) koja ce da kontrolise da li 
                    je datum veci od trenutnog) */}
                </div>
            </div>
            <div className="newsSelector">
                <h2>Obavjesti po općinama</h2>
                <select>{/* vadi iz db opstine po id */}
                    <option>Izaberite općinu</option>
                    <option>Babina Greda</option>
                    <option>Vrbanja</option>
                    <option>Soljani</option>
                    <option>Strošinci</option>
                    <option>Andijaševci</option>
                    <option>Negoslavci</option>
                    <option>Rokovci</option>
                    <option>Privlaka</option>
                    <option>Markušica</option>
                    <option>Šodolovci</option>
                </select>

                <div className="news">
                    {/* Komponenta - vrv nije ista kao gornja
                    kroz switch petlju (valjda) provlaci vesti po
                    opstinama */}
                </div>
            </div>
        </div>
    )
}

export default NewsContainer
