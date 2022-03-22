import React, { useEffect, useState } from 'react';
import '@/assets/styles/controls/selector.css';

type OptionType = { value: string };

interface SelectorInterface {
  label: string;
  options: Array<OptionType>;
  values: Array<string>;
  onChange: (values: Array<string>) => any;
  placeholder?: string;
  multiple?: boolean;
}

function Selector({
  label,
  options,
  values,
  onChange,
  placeholder,
  multiple = false,
}: SelectorInterface) {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [focusedValue, setFocusedValue] = useState<number>(-1);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onBlur = () => {
    let focusedValue = -1;
    if (!multiple) {
      const value = values[0];
      if (value) {
        focusedValue = options.findIndex((option) => option.value === value);
      }
    }
    setFocusedValue(focusedValue);
    setIsFocused(false);
    setIsOpen(false);
  };
  const stopPropagation = (e: React.UIEvent) => e.stopPropagation();

  const onDeleteOption = (e: React.MouseEvent) => {
    const value = e.currentTarget.getAttribute('data-value');
    const [...newValues] = values;
    const index = newValues.indexOf(value);

    newValues.splice(index, 1);
    onChange(newValues);
  };

  const onHoverOption = (e: React.MouseEvent) => {
    const value = e.currentTarget.getAttribute('data-value');
    const index = options.findIndex((option) => option.value === value);

    setFocusedValue(index);
  };

  const onClickOption = (e: React.MouseEvent) => {
    const value = e.currentTarget.getAttribute('data-value');
    if (!multiple) {
      onChange([value]);
      setIsOpen(false);
    } else {
      const [...newValues] = values;
      const index = newValues.indexOf(value);
      if (index === -1) {
        newValues.push(value);
      } else {
        newValues.splice(index, 1);
      }
      onChange(newValues);
    }
  };

  function renderValues() {
    if (values.length === 0) {
      return <span className="placeholder">{placeholder}</span>;
    }

    if (multiple) {
      return values.map((value) => {
        return (
          <span
            key={value}
            onClick={stopPropagation}
            className="multiple value"
          >
            {value}
            <span
              data-value={value}
              onClick={onDeleteOption}
              className="delete"
            >
              <X />
            </span>
          </span>
        );
      });
    }

    return <div className="value">{values[0]}</div>;
  }

  function renderOptions() {
    if (!isOpen) {
      return null;
    }

    return <div className="options">{options.map(renderOption)}</div>;
  }

  function renderOption(option: OptionType, index: number) {
    const { value } = option;

    const selected = values.includes(value);

    let className = 'option';
    if (selected) className += ' selected';
    if (index === focusedValue) className += ' focused';

    return (
      <div
        key={value}
        data-value={value}
        className={className}
        onMouseOver={onHoverOption}
        onClick={onClickOption}
      >
        {value}
      </div>
    );
  }

  return (
    <div
      className="select"
      tabIndex={0}
      onFocus={() => setIsFocused(true)}
      onBlur={() => onBlur()}
    >
      <label className="label">{label}</label>
      <div
        className="selection"
        onClick={() => setIsOpen((preState) => !preState)}
      >
        <div className="render-values">{renderValues()}</div>
        <span className="arrow">
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </span>
      </div>
      {renderOptions()}
    </div>
  );
}

export default Selector;

const X = () => (
  <svg viewBox="0 0 16 16">
    <path d="M2 .594l-1.406 1.406.688.719 5.281 5.281-5.281 5.281-.688.719 1.406 1.406.719-.688 5.281-5.281 5.281 5.281.719.688 1.406-1.406-.688-.719-5.281-5.281 5.281-5.281.688-.719-1.406-1.406-.719.688-5.281 5.281-5.281-5.281-.719-.688z" />
  </svg>
);

const Check = () => (
  <svg viewBox="0 0 16 16">
    <path
      d="M13 .156l-1.406 1.438-5.594 5.594-1.594-1.594-1.406-1.438-2.844 2.844 1.438 1.406 3 3 1.406 1.438 1.406-1.438 7-7 1.438-1.406-2.844-2.844z"
      transform="translate(0 1)"
    />
  </svg>
);

const ChevronDown = () => (
  <svg viewBox="0 0 10 7">
    <path
      d="M2.08578644,6.5 C1.69526215,6.89052429 1.69526215,7.52368927 2.08578644,7.91421356 C2.47631073,8.30473785 3.10947571,8.30473785 3.5,7.91421356 L8.20710678,3.20710678 L3.5,-1.5 C3.10947571,-1.89052429 2.47631073,-1.89052429 2.08578644,-1.5 C1.69526215,-1.10947571 1.69526215,-0.476310729 2.08578644,-0.0857864376 L5.37867966,3.20710678 L2.08578644,6.5 Z"
      transform="translate(5.000000, 3.207107) rotate(90.000000) translate(-5.000000, -3.207107) "
    />
  </svg>
);

const ChevronUp = () => (
  <svg viewBox="0 0 10 8">
    <path
      d="M2.08578644,7.29289322 C1.69526215,7.68341751 1.69526215,8.31658249 2.08578644,8.70710678 C2.47631073,9.09763107 3.10947571,9.09763107 3.5,8.70710678 L8.20710678,4 L3.5,-0.707106781 C3.10947571,-1.09763107 2.47631073,-1.09763107 2.08578644,-0.707106781 C1.69526215,-0.316582489 1.69526215,0.316582489 2.08578644,0.707106781 L5.37867966,4 L2.08578644,7.29289322 Z"
      transform="translate(5.000000, 4.000000) rotate(-90.000000) translate(-5.000000, -4.000000) "
    />
  </svg>
);
