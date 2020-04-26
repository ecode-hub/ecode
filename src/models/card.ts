/**
 * 卡片方向，top 表示正面，bottom 表示反面。
 */
enum ECardSide {
  TOP = 'top',
  BOTTOM = 'bottom'
}

interface ICard {
  id: string;
  question: string;
  description?: string;
  answer: string;
  created_at: number;
  updated_at: number;
}


export {
  ECardSide,
  ICard
};