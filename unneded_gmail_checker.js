(function () {
  const wszystkieMaile = document.querySelectorAll(`[role="grid"] tbody tr`);
  const prawdopodobnieDoWywalenia = function (i) {
    const waznyMail = function (i) {
      if (
        document.querySelector(
          `[role="grid"] tbody tr:nth-child(${i}) [data-is-important="true"]`
        ) !== null
      ) {
        return true;
      } else {
        return false;
      }
    };

    const ogwiazdkowane = function (i) {
      if (
        document.querySelector(
          `[role="grid"] tbody tr:nth-child(${i}) [data-tooltip="Nie oznaczono gwiazdką"]`
        ) === null
      ) {
        return true;
      } else {
        return false;
      }
    };

    const tytulZawieraFv = function (i) {
      const element = document.querySelector(
        `[role="grid"] tbody tr:nth-child(${i})`
      );
      const tekstZElementu = element.textContent.toLowerCase();
      if (tekstZElementu.includes("faktura")) {
        return true;
      } else {
        return false;
      }
    };

    if (!waznyMail(i) && !ogwiazdkowane(i) && !tytulZawieraFv(i)) {
      return true;
    } else {
      return false;
    }
  };

  for (let i = 1; i < 51; i++) {
    if (prawdopodobnieDoWywalenia(i) === true) {
      document
        .querySelector(
          `[role="grid"] tbody tr:nth-child(${i}) [role="checkbox"]`
        )
        .click();
    }
  }
})();
