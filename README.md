Trabajo programación.



Alumno: Orecchia Fabian.


1. Explicar y ejemplificar composición y agregación.

Agregación

Un objeto tiene como atributos a otros objetos, que fueron pasados como parámetros.
Es muy similar a la relación de Asociación solo varía en la multiplicidad ya que en lugar de ser una relación "uno a uno" es de "uno a muchos".
Por ejemplo: 
Tenemos una clase Agenda.
Tenemos una clase contacto.
Una agenda agrupa varios contactos.

Composición

Un objeto está instanciando a otros objetos dentro de su propio código.
Similar a la relación de Agregación solo que la Composición es una relación más fuerte. Aporta documentación conceptual ya que es una "relación de vida", es decir, el tiempo de vida de un objeto está condicionado por el tiempo de vida del objeto que lo incluye.
Por ejemplo:
Tenemos una clase silla.
Tenemos un objeto silla que a su vez está compuesto por 4 objetos patas.
El tiempo de vida de los objetos Pata depende del tiempo de vida de Silla, ya que si no existe una Silla no pueden existir sus Patas.



2. Explicar que es polimorfismo.

Refiere a la propiedad por la que es posible enviar mensajes sintácticamente iguales a objetos de tipos distintos.
 El polimorfismo es donde el método a invocar se determina en tiempo de ejecución según el tipo de objeto. Esta es una situación que se produce cuando tiene una clase que hereda de otra y anula un método en particular.

3. Dar un ejemplo de la vida real de polimorfismo. Diagrama de clases y explicación.
Un ejemplo de polimorfismo, es cuando se tiene una clase pakimon (especia abstracta de personaje luchador de ficción) y de esta clase se instancian dos objetos. Los cuales heredan métodos, que según el tipo de objeto va a determinar cuál va a ser el efecto.
Por ejemplo: el método ‘luchar’ no va a ser igual para un objeto charmandor, que para un objeto malevor.
