it("on peut créer les clées d'un objet avec la valeur d'une variable", function () {
  const heroDansLordreDePreference = ["batman", "superman", "legumeman"];

  const heroPrefere = heroDansLordreDePreference
    .map((nom, index) => ({
      [nom]: index
      }))
    .reduce((prev, curr) => ({
        ...prev,
        ...curr
    }), {});

  assert.equal(heroPrefere["batman"], REPONSE);
  assert.equal(heroPrefere.legumeman, REPONSE);
  assert.equal(heroPrefere.superman, REPONSE);
});

