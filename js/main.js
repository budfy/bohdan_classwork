function checkMaskEmail() {
  const input = document.querySelector('.footer__subscribe-input');
  const button = document.querySelector('.footer__subscribe-button');

  let im = new Inputmask({
    mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
    greedy: false,
    onBeforePaste: function (pastedValue, opts) {
      pastedValue = pastedValue.toLowerCase();
      return pastedValue.replace("mailto:", "");
    },

    oncomplete: function () {
      button.removeAttribute('disabled');
    },

    onincomplete: function () {
      button.setAttribute('disabled', true);
    },
    '*': {
      validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
      casing: "lower"
    }
  })

  im.mask(input);
}
checkMaskEmail();