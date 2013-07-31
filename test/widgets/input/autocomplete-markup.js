define(['widget-test-base', 'jquery', 'jquery-ui', 'src/widgets/input/autocomplete'], function (wt) {

  var Syn = wt.Syn;

  describe("widget(autocomplete): dom construction", function () {

    var fixture, element;



    beforeEach(function () {
      var f = jasmine.getFixtures();
      f.load('test/widgets/input/autocomplete-markup.html');

      var s = jasmine.getStyleFixtures();
      s.load('dist/assets/bootstrap/bootstrap.css');
      s.load('dist/assets/font-awesome/font-awesome.css');
      s.load('dist/assets/richfaces/input/autocomplete.css');

      fixture = $("#fixture");
      element = $(".autocomplete", fixture);
    });



    it("initializes DOM correctly", function () {
      // given
      var expected = $("#expected");

      // when
      element.richAutocomplete({ source: ['Java', 'Haskell'] });

      // then
      expect(fixture).toHaveEqualDom(expected);
    });



    it("can be destructed", function () {
      // given
      var expected = $("#expected");
      var initialDom = expected.html();

      // construct element
      element.richAutocomplete({
        source: ['Java', 'Haskell']
      });
      expect(fixture).toHaveEqualDom(expected);

      // when
      element.richAutocomplete('option', 'disabled');

      // then
      expect(fixture).toHaveEqualDom($('<body>').html(initialDom));
    });



    it("can have button", function () {
      // given
      var expected = $("#expected-with-button");

      // when
      element.richAutocomplete({
        source: ['Java', 'Haskell'],
        showButton: true
      });

      // then
      expect(fixture).toHaveEqualDom(expected);
    });

  });

});