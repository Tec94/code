(define (problem hard1) 
  (:domain matrix) 
  (:objects n1 n2 n3 n4 n5 n6 n7 n8 x1 x2 x3 y1 y2 y3) 
  (:init 
   (value n1) (value n2) (value n3) (value n4) (value n5) (value n6) (value n7) (value n8) 
   (position x1) (position x2) (position x3) 
   (position y1) (position y2) (position y3) 
   (inc x1 x2) (inc x2 x3) (dec x3 x2) (dec x2 x1) 
   (inc y1 y2) (inc y2 y3) (dec y3 y2) (dec y2 y1) 
   (at n1 x1 y1) (at n4 x2 y1) (at n6 x3 y1) (at n5 x1 y2) (at n8 x2 y2) (at n2 x3 y2) (at n3 x1 y3) (at n7 x2 y3) (blank x3 y3) )
  (:goal 
   (and (at n1 x1 y1) (at n2 x2 y1) (at n3 x3 y1) (at n4 x1 y2) (at n5 x2 y2) (at n6 x3 y2) (at n7 x1 y3) (at n8 x2 y3) )) 
)