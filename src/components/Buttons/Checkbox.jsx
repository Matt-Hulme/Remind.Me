import React from 'react';
import CheckboxIconDefault from '../../assets/CheckboxIconDefault.svg';
import CheckboxIconPass from '../../assets/CheckboxIconPass.svg';
import CheckboxIconFail from '../../assets/CheckboxIconFail.svg';

export default function Checkbox({ passFail, isTextboxEmpty }) {
  let checkboxImage;

  if (isTextboxEmpty) {
    checkboxImage = CheckboxIconDefault;
  } else if (passFail) {
    checkboxImage = CheckboxIconPass;
  } else {
    checkboxImage = CheckboxIconFail;
  }

  return (
    <div className="Checkbox">
      {checkboxImage && <img src={checkboxImage} alt="Checkbox" />}
    </div>
  );
}
