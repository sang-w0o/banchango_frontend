import {
  Categories,
  WarehouseConditions,
  AirConditioningTypes,
  WarehouseTypes,
} from './globalVariables';

export const conditionDict = (warehouseCondition) => {
  switch (warehouseCondition) {
    case WarehouseConditions.ROOM_TEMPERATURE:
      return '상온창고';
    case WarehouseConditions.LOW_TEMPERATURE:
      return '저온창고';
    case WarehouseConditions.BONDED:
      return '보세창고';
    case WarehouseConditions.SAVAGE:
      return '야외창고';
    case WarehouseConditions.HAZARDOUS:
      return '위험창고';
    case WarehouseConditions.SELF_STORAGE:
      return '셀프창고';
    case WarehouseConditions.CONTAINER:
      return '컨테이너';
    default:
      return '';
  }
};
export const categoryDict = (category) => {
  switch (category.toString().toUpperCase()) {
    case Categories.CLOTH:
      return '의류 창고 ';
    case Categories.COSMETIC:
      return '화장품 창고 ';
    case Categories.FURNITURE:
      return '가구 창고 ';
    case Categories.GENERAL:
      return '잡화 창고 ';
    case Categories.FOOD:
      return '식품 창고 ';
    case Categories.JEWELRY:
      return '악세사리 창고 ';
    default:
      return '';
  }
};

export const airConditioningTypeDict = (type) => {
  switch (type.toString().toUpperCase()) {
    case AirConditioningTypes.HEATING:
      return '♨난방';
    case AirConditioningTypes.COOLING:
      return '❄냉방';
    case AirConditioningTypes.BOTH:
      return '🌡냉난방';
    default:
      return '';
  }
};

export const workerExistDict = (exist) => {
  switch (exist) {
    case 1:
      return '💁포장 인력';
    default:
      return '';
  }
};

export const categoryInfosDict = (category) => {
  switch (category.toString().toUpperCase()) {
    case Categories.CLOTH:
      return '👕의류';
    case Categories.COSMETIC:
      return '💄화장품';
    case Categories.FURNITURE:
      return '🛌가구';
    case Categories.GENERAL:
      return '👜잡화';
    case Categories.FOOD:
      return '🍔식품';
    case Categories.JEWELRY:
      return '💍악세서리';
    default:
      return '';
  }
};

export const houseTypeDict = (type) => {
  switch (type) {
    case WarehouseTypes.THREEPL:
      return '🚚도매 전문';
    case WarehouseTypes.FULFILLMENT:
      return '🛒소매 전문';
    default:
      return '';
  }
};

export const cctvExistDict = (exist) => {
  switch (exist) {
    case 1:
      return '📹CCTV';
    default:
      return '';
  }
};

export const canParkDict = (canPark) => {
  switch (canPark) {
    case 1:
      return '🚗주차';
    default:
      return '';
  }
};

export const securityCompanyExistDict = (exist) => {
  switch (exist) {
    case 1:
      return '👮보안업체';
    default:
      return '';
  }
};

export const dayOfWeek = [
  { id: '0', value: '월' },
  { id: '1', value: '화' },
  { id: '2', value: '수' },
  { id: '3', value: '목' },
  { id: '4', value: '금' },
  { id: '5', value: '토' },
  { id: '6', value: '일' },
];