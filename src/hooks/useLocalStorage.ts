import React, { useState, useEffect, useRef } from 'react';

type Deserializer<T> = (serialized: string) => T;
type Serializer<T> = (value: T) => string;
type Options<T> = {
  serialize?: Serializer<T>;
  deserialize?: Deserializer<T>;
};

function useLocalStorageState<T>(
  key: string,
  defaultValue: T | (() => T) = '' as unknown as T,
  { serialize = JSON.stringify, deserialize = JSON.parse }: Options<T> = {}
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [state, setState] = useState<T>(() => {
    const valueInLocalStorage = window.localStorage.getItem(key);
    if (valueInLocalStorage) {
      try {
        return deserialize(valueInLocalStorage);
      } catch (error) {
        window.localStorage.removeItem(key);
      }
    }
    return typeof defaultValue === 'function' ? (defaultValue as () => T)() : defaultValue;
  });

  const prevKeyRef = useRef<string>(key);

  useEffect(() => {
    const prevKey = prevKeyRef.current;
    if (prevKey !== key) {
      window.localStorage.removeItem(prevKey);
    }
    prevKeyRef.current = key;
    window.localStorage.setItem(key, serialize(state));
  }, [key, state, serialize]);

  return [state, setState];
}

export default useLocalStorageState;
