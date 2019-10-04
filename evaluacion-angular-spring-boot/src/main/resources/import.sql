USE evaluacion;

INSERT departamento(id, departamento) VALUES(1, 'DEPARTAMENTO 1');
INSERT departamento(id, departamento) VALUES(2, 'DEPARTAMENTO 2');

INSERT provincia(id, departamento_id, provincia) VALUES(1, 1, 'PROVINCIA 1');
INSERT provincia(id, departamento_id, provincia) VALUES(2, 1, 'PROVINCIA 2');
INSERT provincia(id, departamento_id, provincia) VALUES(3, 2, 'PROVINCIA 3');

INSERT distrito(id, provincia_id, distrito) VALUES(1, 1, 'DISTRITO 1');
INSERT distrito(id, provincia_id, distrito) VALUES(2, 1, 'DISTRITO 2');
INSERT distrito(id, provincia_id, distrito) VALUES(3, 2, 'DISTRITO 3');
INSERT distrito(id, provincia_id, distrito) VALUES(4, 2, 'DISTRITO 4');
INSERT distrito(id, provincia_id, distrito) VALUES(5, 3, 'DISTRITO 5');